import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeLedInput from "../Elements/LabeledInput/Index";

const FormSignLn = () => {
    return (
       <form action="">
            <div className="mb-6">
                <LabeLedInput/>
            </div>
            <div className="mb-6">
                <LabeLedInput/>
            </div>
            <div className="mb-3">
                <CheckBox/>
            </div>
                <Button/>       
          </form>
    );
};

export default FormSignLn;    