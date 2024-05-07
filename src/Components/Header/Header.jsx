import * as S from "../Styles/Styled";
import { CiFacebook, CiTwitter, CiSearch, CiMenuBurger  } from "react-icons/ci";
import { PiTwitchLogo, PiUserLight, PiDiscordLogo } from "react-icons/pi";

export default function Header() {
  return (
    <S.Header>
        <S.BoxIcons>
            <CiFacebook/>
            <CiTwitter/>
            <PiTwitchLogo/>
            <PiDiscordLogo/>
        </S.BoxIcons>
            <S.H2>blogames</S.H2>
        <S.BoxIconsMenu>
            <PiUserLight/>
            <CiSearch/>
            <CiMenuBurger/>
        </S.BoxIconsMenu>
    </S.Header>
  )
}
