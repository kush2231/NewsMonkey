import { Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareButtons from "./ShareButtons";

const sharefunction = (url, title = "Check this out") => {
  if (navigator.share) {
    navigator.share({
      title: title,   
      url: url,       
    })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing:', error));
  } else {
    alert('Sharing is not supported on this device/browser.');
  }
};


const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  imageUrl = imageUrl
    ? imageUrl
    : "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg";
  return (
    <>
      <Card sx={{ maxWidth: 345, marginTop: "10px", marginLeft: "0px" }}>
        <CardMedia sx={{ height: 200 }} image={imageUrl} title='green iguana' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {source}
            <br />
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
          <Typography className='text-muted'>
            By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'  onClick={() => sharefunction(newsUrl)}>
            Share
          </Button>
          <Button size='small' href={newsUrl} target='_blank'>
            Read More
          </Button>
          {
            // <ShareButtons/>
          }
        </CardActions>
      </Card>

      {/* <Box>
        <div className='card'>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className='badge rounded-pill bg-danger'> {source} </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                : imageUrl
            }
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>{title} </h5>
            <p className='card-text'>{description}</p>
            <p className='card-text'>
              <small className='text-muted'>
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel='noreferrer'
              href={newsUrl}
              target='_blank'
              className='btn btn-sm btn-dark'
            >
              Read More
            </a>
          </div>
        </div>
      </Box> */}
    </>
  );
};

export default NewsItem;
