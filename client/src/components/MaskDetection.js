import React, { useState, useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";
import Webcam from "react-webcam";
import "../assets/MaskDetection.css";
import trueIcon from "../assets/true-icon.png"
import falseIcon from "../assets/false-icon.png"
import TextToSpeech from "text-to-speech-js";
require('dotenv').config()

export default function MaskDetection(props) {
    const URL = process.env.MODEL_SERVER;

    // let model, webcam, labelContainer, maxPredictions;
    const [ model, setModel ] = useState(null);
    const [ webcam, setWebcam ] = useState(null);
    const [ prediction, setPrediction ] = useState([]);
    // const [ maxPredictions, setMaxPredictions ] = useState();

    const isFirstRender = useRef(true);

    let w, m, flag = 0;

    useEffect(() => {
        async function init() {
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";            
            m = await tmImage.load(modelURL, metadataURL);
            setModel(() => m);
            // Convenience function to setup a webcam
            const flip = true; // whether to flip the webcam
            w = new tmImage.Webcam(400, 400, flip); // width, height, flip
            setWebcam(() => w); 
            await w.setup(); // request access to the webcam
            await w.play();
            window.requestAnimationFrame(loop);
        }
        init();
    }, []);

    const loop = async () => {
        w.update(); // update the webcam frame
        await predict();
        // setTimeout(console.log("Timed Out"), 100);
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        // predict can take in an image, video or canvas html element
        // console.log(model);
        const pred = await m.predict(w.canvas);
        // console.log(prediction);
        setPrediction(() => pred);
        
    }

    const [ mask, setMask ] = useState(false);

    function st() {
        TextToSpeech.talk("You may enter.");
        setMask(() => {
            return true
        });
    }

    function sf() {
        TextToSpeech.talk("Please wear your mask properly.");
        setMask(() => {
            return false
        });
    }
    
    useEffect(() => {
        console.log(mask);
    }, [mask]);

    return (
        <div className="mask-detection">
            <div className="jumbotron centered mdh">
                <div className="container">
                    <h1 className="display-5">Please keep your face in the frame</h1>
                    <hr />
                    {w && <div className="webcam">{w.canvas}</div>}
                    <div className="row">
                        <div className="col">
                            {!mask && <img className="false" src={falseIcon} alt="false-icon" />}
                        </div>
                        <div className="col">
                            <Webcam className="cam" width={700} height={500} />
                            {prediction && prediction.map((p, i) => {
                                return (
                                    <div className="labels" key={i}>
                                        {p.className + ": " + p.probability.toFixed(2)}
                                        {((p.className === "MASK") && (p.probability.toFixed(2) > 0.50) && flag === 0) ? st : sf}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col">
                            {mask && <img className="true" src={trueIcon} alt="true-icon" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}