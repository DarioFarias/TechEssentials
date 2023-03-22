import EditProducts from "../components/EditProducts";

const ControlPanel = () => {
    return (
        <div className=" flex flex-wrap relative items-center justify-evenly p-8 gap-4">
            <EditProducts/>
        </div>
    );
};

export default ControlPanel;
