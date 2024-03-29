import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

export default function PublicationCard ({ title, date, link }) {
  return (
    <div className='bg-white py-7 pl-10 pr-[30px] rounded-[30px]'>
      <div className='flex justify-between items-center gap-x-4'>
        <div className='w-10/12'>
          <div className='space-y-1'>
            <h3 className='font-medium'>
              {title}
            </h3>
            <p className='italic text-base 3xl:text-[19px] text-grey-light'>
              Publicado el {format(parseISO(date), "d 'de' MMMM 'de' yyyy", { locale: es })}
            </p>
          </div>
        </div>
        <div className='w-2/12'>
          <a href={link} target="_blank" rel="noreferrer">
            <img src="/images/publication-link.svg" alt="publication link" />
          </a>
        </div>
      </div>
    </div>
  )
}
