import { useParams } from "react-router-dom";
export default function LoginScreen() {
  const { type } = useParams();
  return (
    <>
      <div>
        <div>loging in as {type}</div>
      </div>
    </>
  );
}
