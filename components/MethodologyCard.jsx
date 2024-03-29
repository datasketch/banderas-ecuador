export default function MethodologyCard ({ title, level, description }) {
  return (
    <div className='bg-white py-[28px] px-[45px] mx-16 lg:mx-0 rounded-[30px]'>
      <div className='space-y-5'>
        <h3 className='font-bold text-grey-light 3xl:text-[21px]'>
          {title}
        </h3>
        <p className="italic text-sm">
          <span className="font-bold">Nivel:</span> {level}
        </p>
        <p className='3xl:text-[19px] text-justify'>
          {description}
        </p>
      </div>
    </div>
  )
};
