import Image from 'next/image'
import Icon from '@/app/favicon.ico'

export default function Page() {
  return <>
  <Image src={Icon} alt="Profile" width={100} height={100}  />
  test
  </>

}