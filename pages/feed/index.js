import styles from '../../styles/Home.module.css';
import StandardImageList from '../../components/StandardImageList';
import { Button } from '@mui/material';
import ImageUploadForm from '../../components/ImageUpload';


export default function Video() {

    // function handleRequest(e) {
    //     const image = getBase64(e.target.files[0])
    //     fetch("https://4ml4bdby25.execute-api.us-east-2.amazonaws.com/process-image", {
    //         method: "POST",
    //         body: JSON.stringify({ url: image })
    //     })
    // }

    // function getBase64(file) {
    //     var reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = function () {
    //         console.log(reader.result.split(',')[1]);
    //         return reader.result.split(',')[1]
    //     };
    //     reader.onerror = function (error) {
    //         console.log('Error: ', error);
    //     };
    // }

    return (
        <>
            <ImageUploadForm />
            <Button onClick={() => { alert("yay@") }}>Click me!</Button>
            <div className={styles.container}>
                <div>Enter video link</div>
                <StandardImageList />
            </div>

        </>
    )

}