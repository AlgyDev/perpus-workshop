import { Button } from "react-daisyui";
import { IoMdArrowRoundForward } from "react-icons/io";

type ButtonSubmitMenuSettingProps = {
  isLoading: boolean;
};

const ButtonSubmitMenuSetting: React.FC<ButtonSubmitMenuSettingProps> = ({
  isLoading,
}) => {
  return (
    <Button
      type="submit"
      size="sm"
      className="bg-primary-500 text-white hover:bg-blue-900"
      loading={isLoading}
      disabled={isLoading}
    >
      Simpan
      <IoMdArrowRoundForward size={18} />
    </Button>
  );
};

export default ButtonSubmitMenuSetting;
