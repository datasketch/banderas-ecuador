import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Inicio | Banderas Ecuador</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='py-10 lg:py-12'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-8'>
            <div className='lg:w-5/12 max-w-[579px]'>
              <img src="/banner-home.png" alt="banner home" />
            </div>
            <div className='lg:w-6/12 max-w-[614px]'>
              <div className='space-y-[30px]'>
                <h1 className='font-black text-5xl 3xl:text-6xl'>
                  Observatorio de <span className='relative'><span className='relative z-10'>Contratación Pública</span><div className='absolute bg-pink h-4 w-full left-0 bottom-1'>&nbsp;</div></span> de Ecuador
                </h1>
                <p>
                  Es una iniciativa de <span className='italic text-gemstone-green underline'>Fundación Ciudadanía y Desarrollo</span> que, a través del análisis de datos de la contratación pública, busca promover la transparencia y la eficiencia de los fondos públicos en Ecuador.
                </p>
                <a className='inline-block px-[30px] py-[10px] border border-gemstone-green text-gemstone-green font-bold rounded-[15px]' href="#">
                  Explorar los datos
                </a>
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
                <p>
                  Entérate cómo se están utilizando los recursos públicos a través de la contratación pública en nuestros informes e investigaciones.
                </p>
                <a className='inline-block px-[30px] py-[10px] border border-white-dark text-white-dark font-bold rounded-[15px]' href="#">
                  Todas las publicaciones
                </a>
              </div>
            </div>
            <div className='lg:w-6/12 max-w-[655px]'>
              <div className='space-y-[45px]'>
                <div className='bg-white py-7 pl-10 pr-[30px] rounded-[30px]'>
                  <div className='flex justify-between items-center'>
                    <div className='w-10/12'>
                      <div className='space-y-1'>
                        <h3 className='font-medium'>
                          Compra Pública Corporativa de Medicamentos
                        </h3>
                        <p className='italic text-base 3xl:text-[19px] text-grey-light'>
                          Publicado el 7 de junio de 2022
                        </p>
                      </div>
                    </div>
                    <div className='w-2/12'>
                      <a href="#">
                        <img src="/publication-link.svg" alt="publication link" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='bg-white py-7 pl-10 pr-[30px] rounded-[30px]'>
                  <div className='flex justify-between items-center'>
                    <div className='w-10/12'>
                      <div className='space-y-1'>
                        <h3 className='font-medium'>
                          Beneficiarios reales en Ecuador: Transparentando la contratación pública e industrias extractivas
                        </h3>
                        <p className='italic text-base 3xl:text-[19px] text-grey-light'>
                          Publicado el 7 de junio de 2022
                        </p>
                      </div>
                    </div>
                    <div className='w-2/12'>
                      <a href="#">
                        <img src="/publication-link.svg" alt="publication link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='space-y-[85px]'>
            <div className='space-y-[19px]'>
              <div className='text-center'>
                <h2 className='font-black text-gemstone-green text-xl 3xl:text-[28px]'>
                  Contratación pública en cifras
                </h2>
              </div>
              <div className='flex flex-col lg:flex-row lg:justify-between gap-x-[61px] gap-y-8'>
                <div className='lg:w-1/3'>
                  <div className='shadow rounded-[55px] pb-[27px]'>
                    <div className='bg-gemstone-green grid place-items-center rounded-full w-[84px] h-[84px]'>
                      <img src="/tenemos.svg" alt="tenemos icon" />
                    </div>
                    <div className='text-center'>
                      <p>Tenemos</p>
                      <p className='text-gemstone-green text-3xl 3xl:text-[45px] font-black'>
                        12,3456,789
                      </p>
                      <p className='text-sm 3xl:text-base mt-1'>procedimientos de contratación.</p>
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/3'>
                  <div className='shadow rounded-[55px] pb-[27px]'>
                    <div className='bg-gemstone-green grid place-items-center rounded-full w-[84px] h-[84px]'>
                      <img src="/money.svg" alt="money icon" />
                    </div>
                    <div className='text-center'>
                      <p>Con un valor adjudicado de</p>
                      <p className='text-gemstone-green text-3xl 3xl:text-[45px] font-black'>
                        USD 1,234,567.89
                      </p>
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/3'>
                  <div className='shadow rounded-[55px] pb-[27px]'>
                    <div className='bg-gemstone-green grid place-items-center rounded-full w-[84px] h-[84px]'>
                      <img src="/date.svg" alt="date icon" />
                    </div>
                    <div className='text-center'>
                      <p>Realizados en el periodo</p>
                      <p className='text-gemstone-green text-3xl 3xl:text-[45px] font-black'>
                        2000-2022
                      </p>
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
              <div className='flex flex-col lg:flex-row lg:justify-between gap-x-[61px] gap-y-8'>
                <div className='lg:w-1/3'>
                  <div className='shadow rounded-[55px] pb-[27px] pt-[43px] px-10'>
                    <div className='text-center'>
                      <p className='text-red text-3xl 3xl:text-[45px] font-black'>
                        12,3456,789
                      </p>
                      <p className='text-2xl 3xl:text-[35px]'>procedimientos</p>
                      <p className='text-sm 3xl:text-base mt-1'>de contratación con un solo oferente.</p>
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/3'>
                  <div className='shadow rounded-[55px] pb-[27px] pt-[43px] px-10'>
                    <div className='text-center'>
                      <p className='text-red text-3xl 3xl:text-[45px] font-black'>
                        12,3456,789
                      </p>
                      <p className='text-2xl 3xl:text-[35px]'>procedimientos</p>
                      <p className='text-sm 3xl:text-base mt-1'>de contratación tuvieron un periodo corto para su adjudicación.</p>
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/3'>
                  <div className='shadow rounded-[55px] pb-[27px] pt-[43px] px-10'>
                    <div className='text-center'>
                      <p className='text-red text-3xl 3xl:text-[45px] font-black'>
                        12,3456,789
                      </p>
                      <p className='text-2xl 3xl:text-[35px]'>proveedores</p>
                      <p className='text-sm 3xl:text-base mt-1'>han obtenido un número desproporcionado de contratos del mismo tipo.</p>
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
                  <p>
                    Las “banderas rojas” en la contratación pública son indicadores de comportamientos sospechosos que pueden ocurrir en todas las etapas de un procedimiento de contratación, desde la publicación de la convocatoria pasando por la adjudicación, hasta la ejecución del contrato.
                  </p>
                  <p>
                    Herramientas como éstas permiten detectar y prevenir la corrupción y el fraude, identificando adquisiciones riesgosas. Además, les permite a los diferentes actores verificar la integridad del sistema de contratación pública, lo que promueve análisis más fuertes y evita potenciales áreas donde se puede cometer malas prácticas.
                  </p>
                  <p>
                    Las pruebas que realizamos para identificar banderas rojas en procedimientos de contratación pública en Ecuador, se hicieron teniendo en cuenta cinco categorías definidas:
                  </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-[55px]'>
                  <div className='shadow-2 text-white text-center py-[21px] px-[34px] bg-gemstone-green rounded-[30px] space-y-2'>
                    <img className='mx-auto' src="/transparencia.svg" alt="transparencia icon" />
                    <p className='font-black text-sm'>
                      Transparencia
                    </p>
                  </div>
                  <div className='shadow-2 text-white text-center py-[21px] px-[34px] bg-gemstone-green rounded-[30px] space-y-2'>
                    <img className='mx-auto' src="/temporalidad.svg" alt="temporalidad icon" />
                    <p className='font-black text-sm'>
                      Temporalidad
                    </p>
                  </div>
                  <div className='shadow-2 text-white text-center py-[21px] px-[34px] bg-gemstone-green rounded-[30px] space-y-2'>
                    <img className='mx-auto' src="/trazabilidad.svg" alt="trazabilidad icon" />
                    <p className='font-black text-sm'>
                      Trazabilidad
                    </p>
                  </div>
                  <div className='shadow-2 text-white text-center py-[21px] px-[34px] bg-gemstone-green rounded-[30px] space-y-2'>
                    <img className='mx-auto' src="/competitividad.svg" alt="competitividad icon" />
                    <p className='font-black text-sm'>
                      Competitividad
                    </p>
                  </div>
                  <div className='shadow-2 text-white text-center py-[21px] px-[34px] bg-gemstone-green rounded-[30px] space-y-2'>
                    <img className='mx-auto' src="/confiabilidad.svg" alt="confiabilidad icon" />
                    <p className='font-black text-sm'>
                      Confiabilidad
                    </p>
                  </div>
                  <div className='shadow-2 text-white text-center py-[21px] px-[34px] bg-gemstone-green rounded-[30px] space-y-2'>
                    <img className='mx-auto' src="/conocer-mas.svg" alt="conocer-mas icon" />
                    <p className='font-black text-sm'>
                      Conocer más
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-5/12 max-w-[863px]'>
              <img src="/banderas-rojas.png" alt="banderas rojas" />
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
            <button className='mt-10 inline-block px-[30px] py-[10px] border border-gemstone-green text-gemstone-green font-bold rounded-[15px]' href="#">
              Cómo utilizar esta herramienta
            </button>
          </div>
          <div className='mt-16'>
            <img className='mx-auto w-full' src="/datasketch-app.png" alt="datasketch app" />
          </div>
        </div>
      </div>
    </>
  )
}