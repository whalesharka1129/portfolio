import { SourceTextModule } from "vm";


export default function Video(): React.ReactNode{
   return(
    <video width="240" height="240" controls>
        <source src="success-stories2.mp4" type="video/mp4" />
    </video>
   )
}