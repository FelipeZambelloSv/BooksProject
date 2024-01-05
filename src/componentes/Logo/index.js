import styled from 'styled-components'
import logo from '../../imagens/logo.svg'

const LogoContainer = styled.div`
  display: flex;
  font-size: 20px;
`

const LogoImg = styled.img`
  margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
          <LogoImg
          src={logo} 
          alt='logo' 
          />

          <p><strong>Zambello's </strong>Books</p>
        </LogoContainer>
    )
}

export default Logo