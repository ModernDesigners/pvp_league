import { useState } from "react";
import MyButton from "../../components/MyButton";
import AddParticipant from "./components/AddParticipant";
import AddEvent from "./components/AddEvent";

export default function Admin() {
  const [panel, setPanel] = useState<null | string>(null);
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <div className="myContainer pt-30">
        <h3 className="text-head font-tkt-semibold text-3xl mb-8">
          <span className="text-main">ადმინ</span> პანელი
        </h3>
        {panel == null ? (
          <div className="flex gap-5 w-full justify-center">
            <MyButton
              click={() => setPanel("add_participant")}
              color="head"
              title="მონაწილის დამატება"
            />
            <MyButton
              click={() => setPanel("add_event")}
              color="head"
              title="ბეთლის დამატება"
            />
          </div>
        ) : (
          <>
            <MyButton
              click={() => setPanel(null)}
              color="head"
              title="უკან დაბრუნება"
            />
            {panel == "add_participant" ? (
              <AddParticipant />
            ) : panel == "add_event" ? (
              <AddEvent />
            ) : null}
          </>
        )}
      </div>
    </>
  );
}

export function MyInput({
  placeholder,
  name,
  defaultValue,
  type,
  onChange,
}: IMyInput) {
  return (
    <div className="flex w-full">
      {defaultValue ? (
        <input
          className="h-[40px]  rounded-md px-5 w-full outline-none bg-input-bg transition-colors text-head tracking-wider hover:bg-input-hover focus:bg-input-focus"
          type={type ? type : "text"}
          name={name}
          value={defaultValue}
          onChange={(e) => (onChange ? onChange(e.target.value) : null)}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="h-[40px]  rounded-md px-5 w-full outline-none bg-input-bg transition-colors text-head tracking-wider hover:bg-input-hover focus:bg-input-focus"
          type={type ? type : "text"}
          name={name}
          onChange={(e) => (onChange ? onChange(e.target.value) : null)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
interface IMyInput {
  placeholder: string;
  name: string;
  defaultValue?: string;
  type?: string;
  onChange?: Function;
}

export function MyInputImage({ title, name, onChange }: IMyInputImage) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <p className="text-head2">{title}</p>
      <input
        className="h-[40px] rounded-md px-5 w-full outline-none bg-input-bg transition-colors text-head tracking-wider hover:bg-input-hover focus:bg-input-focus"
        type={"file"}
        accept=".jpg,.jpeg,.png,.gif,.webp"
        name={name}
        onChange={(e) => {
          handleFileChange(e);
          if (onChange) {
            onChange(e.target.value);
          }
        }}
      />
      {preview && (
        <img src={preview} alt="Preview" className="w-48 h-48 object-cover" />
      )}
    </div>
  );
}
interface IMyInputImage {
  title: string;
  name: string;
  onChange?: Function;
}
