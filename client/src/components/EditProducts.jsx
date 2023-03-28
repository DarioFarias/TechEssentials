import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import {
    useCreateProductMutation,
    useLazyGetProductsByCategoryIdForAdminsQuery,
    useUpdateProductByIdMutation,
} from "../store/services/productService";
import productValidationRules from "../utils/formValidationRules/productValidationRules.jsx";
import { controlPanelContext } from "../context/ControlPanelContext";
import Swal from "sweetalert2";

const EditProducts = () => {
    const { category, product, setProduct } = useContext(controlPanelContext);

    const [isEditing, setIsEditing] = useState(false);

    const [isCreating, setIsCreating] = useState(false);

    const [getProductsByCategoryId, { data: products }] =
        useLazyGetProductsByCategoryIdForAdminsQuery();

    const [createProduct, { data: createData, error }] =
        useCreateProductMutation();

    const [updateProduct, { data: updateData, error: updateError }] =
        useUpdateProductByIdMutation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const resetStateProduct = {
        productName: product?.name,
        productDescription: product?.description,
        productPrice: product?.price,
        productStock: product?.stock,
    };

    const resetStateNoProduct = {
        productName: "",
        productDescription: "",
        productPrice: "",
        productStock: "",
    };

    const handleProductSelect = (event) => {
        const selectedProduct = products?.find(
            (productToFind) => productToFind?.name === event.target.value
        );
        if (selectedProduct) {
            setProduct(selectedProduct);
        } else {
            setProduct();
        }
    };

    useEffect(() => {
        const idCategory = category ? category.Id : "0";
        idCategory ? getProductsByCategoryId(idCategory) : null;
        reset(resetStateNoProduct);
    }, [category]);

    useEffect(() => {
        if (product) {
            reset(resetStateProduct);
        } else {
            reset(resetStateNoProduct);
        }
    }, [product]);

    const showAlert = (success) => {
        if (success) {
            Swal.fire({
                icon: "success",
                title: "¡Éxito!",
                text: "La operación se realizó correctamente",
                customClass: {
                    popup: "animated tada",
                },
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error en la operación",
                customClass: {
                    popup: "animated tada",
                },
            });
        }
    };

    const submit = async (formData) => {
        const productBody = {
            idCategory: category.Id,
            name: formData.productName,
            description: formData.productDescription,
            price: formData.productPrice,
            stock: formData.productStock,
        };

        if (isCreating) {
            const createResult = await createProduct(productBody);
            if (createResult.data) {
                showAlert(true);
                reset(resetStateNoProduct);
                setIsCreating(false);
            } else {
                showAlert(false);
            }
        } else {
            if (isEditing) {
                const updateResult = await updateProduct({
                    id: product.id,
                    ...productBody,
                });
                if (updateResult.data) {
                    showAlert(true);
                    setIsEditing(false);
                } else {
                    showAlert(false);
                }
            }
        }
    };

    const onCancel = () => {
        setIsEditing(false);
        setIsCreating(false);
        product ? reset(resetStateProduct) : reset(resetStateNoProduct);
    };

    const onCreating = () => {
        setIsCreating(true);
        reset(resetStateNoProduct);
    };

    return (
        <div className="flex flex-col items-center bg-indigo-600 rounded-2xl p-4 gap-4 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12">
            <label className="font-bold text-white font-sans text-2xl text-center ">
                BUSCAR PRODUCTO
            </label>

            <form
                className="flex flex-col justify-center items-center gap-4 w-full"
                action=""
                onSubmit={handleSubmit(submit)}
            >
                <select
                    name="products"
                    onChange={handleProductSelect}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
                        isEditing || isCreating ? "bg-gray-300" : ""
                    }`}
                    disabled={isEditing || isCreating}
                >
                    <option value="0">Seleccionar producto</option>
                    {products &&
                        products.map((product, key) => (
                            <option key={key} value={product.name}>
                                {product.name}
                            </option>
                        ))}
                </select>

                <label className="font-bold text-white font-sans text-2xl text-center ">
                    DETALLE DE PRODUCTO
                </label>

                <input
                    name="productName"
                    type="text"
                    maxLength="50"
                    placeholder="Nombre"
                    disabled={!isEditing && !isCreating}
                    {...register(
                        "productName",
                        productValidationRules.productName
                    )}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
                        isEditing || isCreating ? "" : "bg-gray-300"
                    }`}
                />

                {errors?.productName && (
                    <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative">
                        {productValidationRules.getErrorMessages(
                            errors,
                            "productName"
                        )}
                    </p>
                )}

                <textarea
                    name="productDescription"
                    type="text"
                    maxLength="300"
                    placeholder="Descripcion"
                    disabled={!isEditing && !isCreating}
                    {...register(
                        "productDescription",
                        productValidationRules.productDescription
                    )}
                    className={`rounded-2xl h-24 w-11/12 text-center resize-none ${
                        isEditing || isCreating ? "" : "bg-gray-300"
                    }`}
                />

                {errors?.productDescription && (
                    <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative">
                        {productValidationRules.getErrorMessages(
                            errors,
                            "productDescription"
                        )}
                    </p>
                )}

                <input
                    name="productPrice"
                    type="number"
                    maxLength="9"
                    step="0.01"
                    placeholder="Precio"
                    disabled={!isEditing && !isCreating}
                    {...register(
                        "productPrice",
                        productValidationRules.productPrice
                    )}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
                        isEditing || isCreating ? "" : "bg-gray-300"
                    }`}
                />

                {errors?.productPrice && (
                    <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative">
                        {productValidationRules.getErrorMessages(
                            errors,
                            "productPrice"
                        )}
                    </p>
                )}

                <input
                    name="productStock"
                    type="number"
                    maxLength="6"
                    placeholder="Stock"
                    disabled={!isEditing && !isCreating}
                    {...register(
                        "productStock",
                        productValidationRules.productStock
                    )}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
                        isEditing || isCreating ? "" : "bg-gray-300"
                    }`}
                />

                {errors?.productStock && (
                    <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative">
                        {productValidationRules.getErrorMessages(
                            errors,
                            "productStock"
                        )}
                    </p>
                )}

                <div className="flex flex-col justify-center items-center gap-2">
                    <p
                        className={`font-bold text-white font-sans text-sm text-center  ${
                            isEditing || isCreating ? "" : "hidden"
                        }`}
                    >
                        Stock 0 para dar de baja producto
                    </p>
                    <button
                        type="submit"
                        className={`btnGrisPerfil text-xl ${
                            isEditing || isCreating ? "" : "hidden"
                        }`}
                    >
                        {isCreating ? "Aceptar" : "Actualizar"}
                    </button>
                    {isEditing || isCreating ? (
                        <>
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
                            {product && (
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(true)}
                                    className="btnGrisPerfil text-xl"
                                >
                                    Editar
                                </button>
                            )}
                            {category ? (
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

export default EditProducts;
