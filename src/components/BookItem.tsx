import { Card, CardActionArea, CardContent, Typography } from "@mui/material"

function BookItem({title}: {title: any}) { 
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BookItem