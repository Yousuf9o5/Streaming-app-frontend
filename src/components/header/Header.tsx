import Container from 'components/container/Container'
import Link from 'next/link'
import styles from './Header.module.css'
import React from 'react'
import Image from 'next/image'
import icon from 'svgs/undraw_pic_profile_re_7g2h'

type Props = {
    children: React.ReactNode
}

const Header = ({children}:Props) => {
  return (

    <div>
        <Container  >
        
        <div className={styles.head}>
          <h1>party app</h1>
          <ul className={styles.ul}>
            <li>
              <Link className={styles.active} href="/">Home</Link>
            </li>
            <li>
              <Link href="/">
                <Image  src={icon} alt='' />

              </Link>
            </li>
           
          </ul>
        </div>
        </Container>
            

    </div>
  )
}

export default Header