<?php 
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
 $category =  $_GET['category'];  
$response = array();
$target_dir = "assets/images/products/Homecare/";

echo $target_file = $target_dir . basename($_FILES["avatar"]["name"]);

$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
//Check if image file is a actual image or fake image
    $check = getimagesize($_FILES["avatar"]["tmp_name"]);
    if($check !== false) {
        //echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
        if (move_uploaded_file($_FILES["avatar"]["tmp_name"], $target_file)) {
           // echo $target_dir;
            echo "The file ".  basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }



// if($_FILES['avatar'])
// {
//     print_r($_FILES['avatar']);
//     $avatar_name = $_FILES["avatar"]["name"];
//     $avatar_tmp_name = $_FILES["avatar"]["tmp_name"];
//     $error = $_FILES["avatar"]["error"];

//     if($error > 0){
//         $response = array(
//             "status" => "error",
//             "error" => true,
//             "message" => "Error uploading the file!"
//         );
//     }else 
//     {
//         $random_name = rand(1000,1000000)."-".$avatar_name;
//         $upload_name = $upload_dir.strtolower($random_name);
//         $upload_name = preg_replace('/\s+/', '-', $upload_name);

//         if(move_uploaded_file($avatar_tmp_name , $upload_name)) {
//             $response = array(
//                 "status" => "success",
//                 "error" => false,
//                 "message" => "File uploaded successfully",
//                 "url" => $server_url."/".$upload_name
//               );
//         }else
//         {
//             $response = array(
//                 "status" => "error",
//                 "error" => true,
//                 "message" => "Error uploading the file!"
//             );
//         }
//     }    

// }else{
//     $response = array(
//         "status" => "error",
//         "error" => true,
//         "message" => "No file was sent!"
//     );
// }

// echo json_encode($response);
?>