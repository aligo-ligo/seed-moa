import { Helmet } from "react-helmet-async";

interface MetaProps {
  name: string;
  id: string;
}

const IMAGE_SIZE = {
  width: 1200,
  height: 600,
};

const Meta = ({ name, id }: MetaProps) => {
  const imageUrl = `https://aligoligo.me/logo.png`;

  return (
    <Helmet>
      <title>{`나의 목표 노트를 알리고 올리고`}</title>
      <meta
        name="description"
        content={`목표를 설장하고 공유해 보다 쉽게 이루어보세요`}
      />
      <meta property="og:type" content="website" />
      <link href={imageUrl} />
      <meta property="og:url" content={`https://aligoligo.me/result/${id}`} />
      <meta name="og:title" content={`${name}님이 만드신 목표예요`} />
      <meta name="og:description" content={`${name}님의 목표를 응원해주세요`} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={IMAGE_SIZE.width.toString()} />
      <meta property="og:image:height" content={IMAGE_SIZE.height.toString()} />
    </Helmet>
  );
};

export default Meta;
