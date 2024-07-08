import { Card, CardActionArea, CardContent, Typography } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';

function BookItem({ title }: { title: any }) {
  return (
    <Card className="group relative !overflow-visible">
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
      <div className="absolute right-0 top-0 opacity-0 group-hover:translate-x-full group-hover:opacity-100 z-50 flex flex-col duration-300">
        <button className="w-8 h-8 bg-red rounded-[6px_6px_6px_0]">
          <DeleteOutlineIcon className="text-white" />
        </button>
        <button className="w-8 h-8 rounded-[0_6px_6px_6px] bg-dark-blue">
          <DrawOutlinedIcon className="text-white" />
        </button>
      </div>
    </Card>
  )
}

export default BookItem