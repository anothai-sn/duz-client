import React from 'react';
import { useParams } from 'react-router-dom';  // Import useParams hook
import Img1 from '../../imges/animals/68943.jpg';  // Update the import path as needed
import Img2 from '../../imges/animals/68945.jpg';  // Update the import path as needed
import Img3 from '../../imges/animals/68949.jpg';  // Update the import path as needed

const AnimalDetail = () => {
    const { animalName } = useParams();

    const data = [
        {
            id: 1,
            animalName: "Name1",
            animalImage: Img1,
            decription: {
                behavior: "Behavior details",
                place: "Place details",
                reproduce: "Reproduction details",
                food: "Food details",
                status: "Status details"
            }
        },
        {
            id: 2,
            animalName: "Name2",
            animalImage: Img2,
            decription: {
                behavior: "Behavior details",
                place: "Place details",
                reproduce: "Reproduction details",
                food: "Food details",
                status: "Status details"
            }
        },
        {
            id: 3,
            animalName: "Name3",
            animalImage: Img3,
            decription: {
                behavior: "Behavior details",
                place: "Place details",
                reproduce: "Reproduction details",
                food: "Food details",
                status: "Status details"
            }
        }
    ];

    const animal = data.find(animal => animal.animalName === animalName);

    if (!animal) {
        return <p>Animal not found</p>;
    }

    return (
        <div>
            <div className="img-animal">
                <img src={animal.animalImage} height="300px" width="300px" style={{ marginLeft: '65px' }} alt={animal.animalName} />
            </div>
            <br />
            <div className="text1">
                <h3>{animal.animalName}</h3>
                <h3>พฤติกรรม</h3>
                <p>{animal.decription.behavior}</p>
                <h3>ที่อยู่อาศัย</h3>
                <p>{animal.decription.place}</p>
                <h3>การสืบพันธ์</h3>
                <p>{animal.decription.reproduce}</p>
                <h3>อาหาร</h3>
                <p>{animal.decription.food}</p>
                <h3>สถานภาพ</h3>
                <p>{animal.decription.status}</p>
            </div>
        </div>
    );
};

export default AnimalDetail;
