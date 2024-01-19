interface ImgCardProps {
  photo: string;
  name: string;
  position: string;
  highlight?: boolean;
}

function ImgCard({ photo, name, position, highlight = false }: ImgCardProps) {
  return (
    <div className="flex flex-col text-left cursor-pointer">
      <div className="overflow-clip w-100">
        <img
          className="object-cover w-full aspect-square object-top grayscale scale-100 transition duration-300 ease-in-out hover:grayscale-0 hover:scale-110"
          src={photo}
          alt=""
        />
      </div>

      <h3 className={`mt-4 text-2xl w-fit capitalize ${highlight ? 'text-highlight' : ''}`}>
        {name}
      </h3>
      <p className="mt-2 capitalize">{position}</p>
    </div>
  );
}
export default ImgCard;
