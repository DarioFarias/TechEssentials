import EditCategories from "../components/EditCategories";
import EditProducts from "../components/EditProducts";
import ControlPanelContext from "../context/ControlPanelContext";

const ControlPanel = () => {
    return (
        <div className=" flex flex-wrap relative items-center justify-evenly p-8 gap-4">
            <ControlPanelContext>
                <EditCategories />
                <EditProducts />
            </ControlPanelContext>
        </div>
    );
};

export default ControlPanel;
