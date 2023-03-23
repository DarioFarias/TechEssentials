import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
} from '../store/services/categoryService';
import productValidationRules from '../utils/formValidationRules/productValidationRules.jsx';
import { controlPanelContext } from '../context/ControlPanelContext';
import Swal from 'sweetalert2';
import { userContext } from '../context/UserContext';

const EditCategories = () => {
  const { category, setCategory, setProduct } = useContext(controlPanelContext);

  const [isEditing, setIsEditing] = useState(false);

  const [isCreating, setIsCreating] = useState(false);

  const { data: categories } = useGetAllCategoriesQuery();

  const [createCategory, { data: createData, error: createError }] =
    useCreateCategoryMutation();
  const { userData } = useContext(userContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const resetStateProduct = {
    productCategory: category?.name,
  };

  const resetStateNoProduct = {
    productCategory: '',
  };

  const handleCategorySelect = (event) => {
    const selectedCategory = categories?.find(
      (category) => category?.name === event.target.value
    );
    if (selectedCategory) {
      setCategory(selectedCategory);
    } else {
      setCategory();
      setProduct();
    }
  };

  useEffect(() => {
    category ? reset(resetStateProduct) : reset(resetStateNoProduct);
  }, [category]);

  const submit = async (formData) => {
    if (isCreating) {
      const categoryBody = {
        name: formData.productCategory,
      };
      const createResult = await createCategory(categoryBody);
      if (createResult.data) {
        showAlert(true);
        reset(resetStateNoProduct);
        setIsCreating(false);
      } else {
        showAlert(false);
      }

      //   error ? console.log(error) : null;
    }
  };

  const onCancel = () => {
    setIsEditing(false);
    setIsCreating(false);
    category ? reset(resetStateProduct) : reset(resetStateNoProduct);
  };

  const onCreating = () => {
    setIsCreating(true);
    reset(resetStateNoProduct);
  };
  // Configuración de SweetAlert2
  const showAlert = (success) => {
    if (success) {
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'La operación se realizó correctamente',
        animation: true,
        customClass: {
          popup: 'animated tada',
        },
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error en la operación',
        animation: true,
        customClass: {
          popup: 'animated tada',
        },
      });
    }
  };

  return (
    <div className="flex flex-col items-center bg-indigo-600 rounded-2xl p-4 gap-4 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12">
      <label className="font-bold text-white font-sans text-2xl text-center ">
        BUSCAR CATEGORIA
      </label>

      <form
        className="flex flex-col justify-center items-center gap-4 w-full"
        action=""
        onSubmit={handleSubmit(submit)}
      >
        <select
          name="categories"
          onChange={handleCategorySelect}
          className={`rounded-2xl h-12 w-11/12 text-center ${
            isEditing || isCreating ? 'bg-gray-300' : ''
          }`}
          disabled={isEditing || isCreating}
        >
          <option value="0">Seleccionar categoria</option>
          {categories &&
            categories.map((category, key) => (
              <option key={key} value={category.name}>
                {category.name}
              </option>
            ))}
        </select>

        <label className="font-bold text-white font-sans text-2xl text-center ">
          DETALLE DE CATEGORIA
        </label>

        <input
          name="Category"
          type="text"
          maxLength="50"
          placeholder="Nombre"
          list="categoryList"
          disabled={!isEditing && !isCreating}
          {...register(
            'productCategory',
            productValidationRules.productCategory
          )}
          className={`rounded-2xl h-12 w-11/12 text-center ${
            isEditing || isCreating ? '' : 'bg-gray-300'
          }`}
        />
        <datalist id="categoryList">
          {categories &&
            categories.map((category, key) => (
              <option key={key} value={category.name}>
                {category.name}
              </option>
            ))}
        </datalist>

        {errors?.productCategory && (
          <p className="text-red-700">
            {productValidationRules.getErrorMessages(errors, 'productCategory')}
          </p>
        )}

        <div className="flex flex-col justify-center items-center ">
          {isEditing || isCreating ? (
            <>
              <button type="submit" className="btnGrisPerfil text-xl">
                {isCreating ? 'Aceptar' : 'Actualizar'}
              </button>
              <button
                type="button"
                onClick={() => onCancel()}
                className="btnGrisPerfil text-xl"
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              {category && (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="btnGrisPerfil text-xl"
                >
                  Editar
                </button>
              )}
              {!category ? (
                // RECUERDA QUE SOLO AQUI TIENE QUE ESTAR EL ONCREATING , QUITA EL SWAL
                <button
                  type="button"
                  onClick={() => onCreating()}
                  className="btnGrisPerfil text-xl"
                >
                  Nuevo
                </button>
              ) : null}
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditCategories;
