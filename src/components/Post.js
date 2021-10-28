import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function RecipeReviewCard({ post }) {
  const { image, owner, text, likes, tags } = post;
  const formatedDate = new Date(Date.parse(post.publishDate))
    .toISOString()
    .slice(0, 10);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar src={owner.picture} />}
        title={`${owner.firstName} ${owner.lastName}`}
        subheader={formatedDate}
      />
      <CardMedia component='img' height='194' image={image} alt='post image' />
      <CardContent>
        <Typography
          variant='body2'
          color='text.secondary'
          style={{ height: '40px' }}
        >
          {text}
        </Typography>
      </CardContent>
      <CardActions spacing={1}>
        <FavoriteIcon />
        <span style={{ marginLeft: '5px' }}>{likes}</span>
      </CardActions>
      <CardActions spacing={1}>
        <Stack direction='row' spacing={1}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} variant='outlined' />
          ))}
        </Stack>
      </CardActions>
    </Card>
  );
}
