import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1572246538688-3f326dca3951?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
   const HOT_URL="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const COLD_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3OjnEU9pBBcBILssiuxwAH7i8pBLD5urrA&s";
   const RAIN_URL="https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";



    return (
        <div className="InfoBox">
          
       <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ? RAIN_URL
          :info.temp >15
          ?HOT_URL
          :COLD_URL
        }
        
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min temp={info.tempMin} &deg;C</p>
         <p>Max temp={info.tempMax}&deg;C </p>
         <p>The weather can be described as <i>{info.weather} </i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}