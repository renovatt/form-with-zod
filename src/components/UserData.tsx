import React, { useEffect, useState } from 'react'
import { AvatarImageProps, SchemaTypeProps } from '../@types'
import { Avatar } from './Avatar'
import { getAll } from '../connections'

const UserData = (props: SchemaTypeProps) => {
    const [photos, setPhotos] = useState<AvatarImageProps[]>([])
    const [loading, setLoading] = React.useState(false)

    const getPhotos = async () => {
        setLoading(true);
        const allPhotos = await getAll();
        const filteredPhotos = allPhotos.filter(item => item.name === props.username);
        setPhotos(filteredPhotos);
        setLoading(false);
    };

    useEffect(() => {
        getPhotos()
    }, [props.username])

    return (
        <section className="flex flex-col w-full rounded border p-2">
            {loading ? <p>Carregando..</p> : props && (
                <section className='flex flex-col relative'>
                    <h6><span className='text-purple-500'>Nome: </span>{props.username}</h6>

                    {!loading && photos.length ? (
                        <div className='absolute right-0 top-0'>
                            {photos?.map((item, index) => (
                                <Avatar
                                    key={index}
                                    url={item.url}
                                    name={props.username}
                                />
                            ))}
                        </div>
                    ) : ''}

                    <h6><span className='text-purple-500'>E-mail: </span>{props.email}</h6>
                    <h6><span className='text-purple-500'>Senha: </span>{props.password}</h6>
                    <h6><span className='text-purple-500'>Confimação da senha: </span>{props.confirmPassword}</h6>
                    <h6><span className='text-purple-500'>Contato: </span>{props.phone}</h6>
                    <h6><span className='text-purple-500'>Termos: </span>{props.agree}</h6>
                    <h6><span className='text-purple-500'>Sexo: </span>{props.select}</h6>
                    <h6><span className='text-purple-500'>CPF: </span>{props.cpf}</h6>
                    <h6><span className='text-purple-500'>Nascimento: </span>{props.date}</h6>
                    <h6><span className='text-purple-500'>URL: </span>{props.url}</h6>
                    <h6><span className='text-purple-500'>Permissão: </span>{props.role}</h6>

                    <div>
                        <span className='text-purple-500'>Tecnologias:</span>
                        {props.techs?.map(tech => (
                            <ul key={tech.title}>
                                <li>{tech.title} - nível: <span>{tech.knowledge}</span></li>
                            </ul>
                        ))}
                    </div>
                </section>
            )}
        </section>
    )
}

export default UserData