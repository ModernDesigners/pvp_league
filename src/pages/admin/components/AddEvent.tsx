import axios from "axios";
import MyButton from "../../../components/MyButton";
import { MyInput, MyInputImage } from "../admin";

export default function AddEvent() {
  const submitForm = (formData: FormData) => {
    axios.post("test", formData);
  };
  return (
    <div className="flex justify-center flex-col items-center mt-5 mb-10">
      <h4 className="text-lg">ივენთის დამატება</h4>
      <form action={submitForm} className="flex flex-col gap-5 mt-5 w-full">
        <MyInput
          placeholder="მონაწილე 1 (სასცენო სახელი)"
          name="participant_1"
        />
        <MyInput
          placeholder="მონაწილე 2 (სასცენო სახელი)"
          name="participant_2"
        />
        <MyInputImage title="უკანა ფოტო" name="banner" />
        <MyButton title="დამატება" color="head" />
      </form>
    </div>
  );
}
