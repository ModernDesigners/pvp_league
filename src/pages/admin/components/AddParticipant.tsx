import axios from "axios";
import MyButton from "../../../components/MyButton";
import { MyInput, MyInputImage } from "../admin";

export default function AddParticipant() {
  const submitForm = (formData: FormData) => {
    axios.post("test", formData);
  };
  return (
    <div className="flex justify-center flex-col items-center mt-5 mb-10">
      <h4 className="text-lg">მონაწილის დამატება</h4>
      <form action={submitForm} className="flex flex-col gap-5 mt-5 w-full">
        <MyInput placeholder="სახელი" name="name" />
        <MyInput placeholder="სასცენო სახელი" name="nickname" />
        <MyInput type="number" placeholder="სულ რაუნდები" name="rounds" />
        <MyInput type="number" placeholder="მოგებული რაუნდები" name="wins" />
        <MyInput type="number" placeholder="წაგებული რაუნდები" name="loses" />
        <MyInputImage title="პროფილის ფოტო" name="image" />
        <MyInputImage title="უკანა ფოტო" name="banner" />
        <MyButton title="დამატება" color="head" />
      </form>
    </div>
  );
}
