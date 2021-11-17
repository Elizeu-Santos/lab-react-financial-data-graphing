import axios from "axios";
import Chart from "chart.js/auto";
import { useState, useEffect } from "react";

function Graph() {
    const [priceData, setPriceData] = useState({});
    const [chat, setChart] = useState(null);

    useEffect(() => {
        axios
        .get("http://api.coindesk.com/v1/bpi/historical/close.json")
        .then((response) => {
            setPriceData({...response.data.bpi})
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        const ctx = document.getElementById("myCanvas").getContext("2d");

        if (Chart) {
            Chart.destroy();
        }
        const chartInstance = new Chart(ctx, {
            type: "line",
            data: {
                labels: Object.keys(priceData).reverse(),
                datasets: [
                    {
                        
                    }
                ]

            }
        })
    })

}
export default Graph