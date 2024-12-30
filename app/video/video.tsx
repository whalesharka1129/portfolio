import { SourceTextModule } from "vm";

export default function Video(): React.ReactNode {
  return (
    <video
      autoPlay
      muted
      loop
      style={{ width: "240px", height: "240px" }}
      className="m-[-30px]"
    >
      <source src="/success-stories2.mp4" type="video/mp4" /> 
      Your browser does not support the video tag.
    </video>
  );
}
