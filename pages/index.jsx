import PublicationCard from '../components/PublicationCard'
import RedFlagCard from '../components/RedFlagCard'
import redFlagsImages from '../data/red-flags-images.json'
import Link from 'next/link'
import reports from '../data/reports.json'
import { Fragment, useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import DataTable from '../components/DataTable'
import { addDays } from 'date-fns'

export default function Home ({ dataRankings = [], lastUpdated }) {
  // TODO: update endpoint
  const endpoint = 'https://corporatetrails.com/ec/partySummaries.json'
  const [stats, setStats] = useState({})
  const [hasLimit, setHasLimit] = useState(false)

  const dataRankingsFormat = dataRankings.reduce((prev, curr, i, arr) => {
    return [...prev, {
      name: curr.name,
      data: curr.data.reduce((prev, curr, j) => {
        return [...prev, {
          position: {
            label: 'Posición',
            value: j + 1
          },
          contacting_entity: {
            label: 'Entidad contratante',
            value: curr.name
          },
          [`summary_total_score_${arr[i].name}`]: {
            label: 'Puntaje',
            value: curr[`summary_total_score_${arr[i].name}`]
          },
          transparency: {
            label: 'Transparencia',
            value: curr.summary_trans
          },
          temporality: {
            label: 'Temporalidad',
            value: curr.summary_temp
          },
          traceability: {
            label: 'Trazabilidad',
            value: curr.summary_traz
          },
          competitiveness: {
            label: 'Competitividad',
            value: curr.summary_comp
          },
          confiability: {
            label: 'Confiabilidad',
            value: curr.summary_network
          }
        }]
      }, [])
    }]
  }, [])

  useEffect(() => {
    let ignore = false
    fetch(endpoint).then(response => response.json())
      .then(json => {
        if (!ignore) {
          // TODO: update with json response
          setStats(json)
        }
      })
    return () => {
      ignore = true
    }
  }, [])

  return (
    <>
      <div className='py-10 lg:py-12'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-8'>
            <div className='lg:w-5/12 max-w-[579px]'>
              <img src="/images/banner-home.png" alt="banner home" />
            </div>
            <div className='lg:w-6/12 max-w-[614px]'>
              <div className='space-y-[30px]'>
                <h1 className='font-black text-5xl 3xl:text-6xl'>
                  Observatorio de <span className='relative'><span className='relative z-10'>Contratación Pública</span><div className='absolute bg-pink h-4 w-full left-0 bottom-1'>&nbsp;</div></span>
                </h1>
                <p className='text-justify'>
                  Es una iniciativa de <a href='https://www.ciudadaniaydesarrollo.org/' target='_blank' className='italic text-gemstone-green underline' rel="noreferrer">Fundación Ciudadanía y Desarrollo</a> que, a través del análisis y difusión de datos de la contratación pública, busca promover la contratación abierta en Ecuador.
                </p>
                <Link href="/banderas-rojas#app">
                  <a className='inline-block px-[30px] py-[10px] border border-gemstone-green text-gemstone-green font-bold rounded-[15px]'>
                    Explorar los datos
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 lg:py-12 xl:py-16 bg-grey-light'>
        <div className='mx-auto w-10/12 lg:w-9/12 max-w-screen-2xl'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-8'>
            <div className='lg:w-5/12 max-w-[507px]'>
              <div className='space-y-8 text-white-dark'>
                <h2 className='font-black text-3xl 3xl:text-[45px]'>
                  Últimas Publicaciones
                </h2>
                <p className='text-justify'>
                  Entérate cómo se están utilizando los recursos públicos a través de la contratación pública en nuestros informes e investigaciones.
                </p>
                <Link href="/informes">
                  <a className='inline-block px-[30px] py-[10px] border border-white-dark text-white-dark font-bold rounded-[15px]'>
                    Todas las publicaciones
                  </a>
                </Link>
              </div>
            </div>
            <div className='lg:w-6/12 max-w-[655px]'>
              <div className='space-y-[45px]'>
                {
                  reports.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2).map(({ id, title, date, link }) => <PublicationCard key={`publication-${id}`} title={title} date={date} link={link} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-grey py-12 lg:py-16 xl:py-20 relative overflow-hidden'>
        <div className='mx-auto w-10/12 lg:w-9/12 max-w-screen-2xl'>
          <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8'>
            <div className='lg:w-5/12 max-w-[507px] relative z-10'>
              <h2 className='font-black text-3xl 3xl:text-[45px] text-white-dark'>
                Ranking ¿Estamos contratando bien?
              </h2>
            </div>
            <div className='lg:w-6/12 max-w-[655px]'>
              <p className='text-lg lg:text-xl text-white-dark text-justify'>
                Conoce a las instituciones públicas que mejor contratan según las categorías de transparencia, temporalidad, trazabilidad, competitividad y confiabilidad. La clasificación incluye a las instituciones que efectuaron al menos 100 contratos durante el año en curso o durante el año anterior. La información correspondiente al año en curso se actualiza a mes vencido, así podrás conocer cómo las instituciones públicas están contratando. Mira aquí más sobre nuestra <a className='underline text-red' href='https://docs.google.com/document/d/1Jo0w6H6uR5SyzNB9wH8s6dZReER85OwM/edit' target='_blank' rel="noreferrer">metodología</a>.
              </p>
            </div>
          </div>
          <div className='mt-10 relative z-10'>
            <div className='relative'>
              <Tab.Group defaultIndex={1}>
                <Tab.List className="border-2 border-white-dark rounded-2xl inline-block text-white-dark text-lg xl:text-xl overflow-hidden">
                  {dataRankingsFormat.map(({ name }, i) => {
                    return (
                      <Tab key={`tab-${i}`} as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={classNames('py-3 px-6 outline-none overflow-hidden rounded-2xl', { 'bg-red': selected })}
                          >
                            {name.slice(-4)}
                          </button>
                        )}
                      </Tab>
                    )
                  })}
                </Tab.List>
                <Tab.Panels className="mt-4">
                  {dataRankingsFormat.map((item, i) => {
                    return (
                      <Tab.Panel key={`panel-${i + 1}`}>
                        <DataTable setHasLimit={setHasLimit} data={item.data.slice(0, 10)} />
                      </Tab.Panel>
                    )
                  })}
                </Tab.Panels>
              </Tab.Group>
              <div className={classNames('lg:hidden absolute top-1/2 -translate-y-1/2 duration-300', { 'left-0': hasLimit, '-left-full': !hasLimit })}>
                <img src='/images/arrow-left.svg' alt='arrow left icon' />
              </div>
              <div className={classNames('lg:hidden absolute top-1/2 -translate-y-1/2 duration-300', { 'right-0': !hasLimit, '-right-full': hasLimit })}>
                <img src='/images/arrow-right.svg' alt='arrow right icon' />
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-white text-sm'>
                Última actualización: {new Intl.DateTimeFormat('es-CO', { dateStyle: 'long' }).format(addDays(new Date(lastUpdated), 1))}
              </p>
            </div>
            <div className='text-center mt-12'>
              <Link href="/banderas-rojas#app">
                <a className='inline-block py-2 px-6 outline-none overflow-hidden rounded-2xl bg-red text-white'>
                  Ver todas las entidades
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='absolute top-10 left-10'>
          <img className='w-2/3' src='/images/stars.svg' alt='stars icon' />
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='space-y-[85px]'>
            <div className='space-y-[19px]'>
              <div className='text-center text-gemstone-green'>
                <h2 className='font-black text-xl 3xl:text-[28px]'>
                  Contratación pública en cifras
                </h2>
                <p className='text-lg'>2015-{new Date().getFullYear()}</p>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[61px] gap-y-8'>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px]'>
                    <div className='bg-gemstone-green grid place-items-center rounded-full w-[84px] h-[84px]'>
                      <img src="/images/tenemos.svg" alt="tenemos icon" />
                    </div>
                    <div className='text-center space-y-4 px-2'>
                      <p className='text-gemstone-green text-3xl 3xl:text-[45px] font-black'>
                        {new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(stats.contract_count)}
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>procedimientos de contratación</p>
                    </div>
                  </div>
                </div>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px]'>
                    <div className='bg-gemstone-green grid place-items-center rounded-full w-[84px] h-[84px]'>
                      <img src="/images/money.svg" alt="money icon" />
                    </div>
                    <div className='text-center space-y-4 px-2'>
                      <p className='text-gemstone-green text-3xl 3xl:text-[45px] font-black'>
                        {new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(stats.countract_amount)}
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>valor nominal adjudicado en USD</p>
                    </div>
                  </div>
                </div>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px]'>
                    <div className='bg-gemstone-green grid place-items-center rounded-full w-[84px] h-[84px]'>
                      <img className='w-14' src="/images/providers.svg" alt="providers icon" />
                    </div>
                    <div className='text-center space-y-4 px-2'>
                      <p className='text-gemstone-green text-3xl 3xl:text-[45px] font-black'>
                        {new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(stats.count_suppliers)}
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>proveedores adjudicados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='space-y-[19px]'>
              <div className='text-center'>
                <h2 className='font-black text-red text-xl 3xl:text-[28px]'>
                  Riesgos en la contratación
                </h2>
              </div>
              <div className='grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-x-[61px] gap-y-8'>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px] pt-[43px] px-10'>
                    <div className='text-center space-y-4 px-2'>
                      <p className='text-red text-3xl 3xl:text-[45px] font-black'>
                        {new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(stats['count_tender-single-bidder-only'])}
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>procedimientos de contratación con un solo oferente</p>
                    </div>
                  </div>
                </div>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px] pt-[43px] px-10'>
                    <div className='text-center space-y-4 px-2'>
                      <p className='text-red text-3xl 3xl:text-[45px] font-black'>
                        {new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(stats['count_short-awards-procedures'])}
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>procedimientos de contratación tuvieron un período corto para su adjudicación</p>
                    </div>
                  </div>
                </div>
                <div className='shadow rounded-[55px]'>
                  <div className='pb-[27px] pt-[43px] px-10'>
                    <div className='text-center space-y-4 px-2'>
                      <p className='text-red text-3xl 3xl:text-[45px] font-black'>
                        {new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(stats['count_one-few-bidders-win-disproportionate-number-contracts-same-type'])}
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>proveedores han obtenido un número desproporcionado de contratos del mismo tipo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 bg-gemstone-green'>
        <div className='w-10/12 mx-auto lg:ml-auto lg:mr-0 lg:w-[89vw] max-w-screen-2xl'>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-8'>
            <div className='lg:w-6/12 max-w-[756px]'>
              <div className='space-y-[50px]'>
                <div className='text-white space-y-[35px]'>
                  <h2 className='text-3xl 3xl:text-[45px] font-black'>
                    Banderas Rojas
                  </h2>
                  <p className='text-justify'>
                    Las “banderas rojas” en la contratación pública son indicadores de comportamientos sospechosos que pueden ocurrir en todas las etapas de un procedimiento de contratación, desde la publicación de la convocatoria pasando por la adjudicación, hasta la ejecución del contrato.
                  </p>
                  <p className='text-justify'>
                    Herramientas como éstas permiten detectar y prevenir la corrupción. Asimismo, permite verificar la integridad del sistema de contratación pública mediante la identificación de adquisiciones riesgosas.
                  </p>
                  <p className='text-justify'>
                    La metodología para identificar banderas rojas en procedimientos de contratación pública en Ecuador tomó en cuenta cinco categorías:
                  </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-[55px]'>
                  {
                    redFlagsImages.map(({ title, urlImage }, index) => <RedFlagCard key={`red-flag-${index + 1}`} title={title} urlImage={urlImage} />)
                  }
                </div>
              </div>
            </div>
            <div className='lg:w-5/12 max-w-[863px]'>
              <img src="/images/banderas-rojas.png" alt="banderas rojas" />
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='text-center max-w-[632px] mx-auto'>
            <h2 className='text-grey text-3xl 3xl:text-[45px] font-black'>
              Explorador de datos
            </h2>
            <p className='mt-6'>
              Esta herramienta de visualización de datos permite observar cómo se comportan las banderas rojas identificadas en los procedimientos de contratación pública en Ecuador.
            </p>
            <Link href="/banderas-rojas">
              <a className='mt-10 inline-block px-[30px] py-[10px] border border-gemstone-green text-gemstone-green font-bold rounded-[15px]'>
                Cómo utilizar esta herramienta
              </a>
            </Link>
          </div>
          <div className='mt-16'>
            <iframe className="h-96 md:h-auto md:aspect-video" src="https://services.datasketch.co/banderas-app/" width="100%"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

async function getData (endpoint) {
  const res = await fetch(endpoint)
  return res.json()
}

export const getServerSideProps = async () => {
  const base = 'https://s3.amazonaws.com/uploads.dskt.ch/fcd/banderas-rojas'
  const res = await fetch(`${base}/banderas-rojas.base.json`)
  const data = await res.json()
  const { last_updated: lastUpdated } = data

  // DINAMYC RANKINGS
  const rankings = data.hdtables_slugs.reduce((prev, curr) => {
    if (curr.length === 4) return prev
    return [...prev, curr]
  }, [])

  // GET ALL RANKINGS DATA
  const promises = rankings.map((ranking) => getData(`${base}/${ranking}.json`))
  const dataRankingsPromise = await Promise.all(promises)

  const dataRankings = dataRankingsPromise.map((item, i) => {
    return {
      name: rankings[i].slice(-4),
      data: item
    }
  })

  return { props: { dataRankings, lastUpdated } }
}
