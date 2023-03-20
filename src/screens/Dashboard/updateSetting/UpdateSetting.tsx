import { Button } from "@mui/material";

const UpdateSetting = ({
  data,
}: {
  data: { text: string; onPress: () => void }[];
}) => {
  return (
    <div className="right_side_setting">
      {data.map((d) => (
        <Button onClick={d.onPress}>{d.text}</Button>
      ))}
    </div>
  );
};

export default UpdateSetting;
