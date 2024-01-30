import React, { Fragment } from "react";
import { CopyRightText, FooterContainer, Group, Icon, Socials } from "./styles";

const Footer = () => {
    return (
    <Fragment>
         <FooterContainer>
            <Group>
                <p>About</p>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Disclaimer</p>
                <p>Acceptable Use</p>
            </Group>
            <Group>
                <p>FAQ</p>
                <p>Complaints Policy</p>
                <p>Cookie Notice</p>
                <p>DMCA</p>
                <p>USC 2257</p>
            </Group>
            <Group>
                <p>Contact</p>
                <p>Blogs</p>
                <p>Referral</p>
                <p>Standard Agreement</p>
                <h4>Share Chello</h4>
                <Socials>
                    <Icon>
                        
                    </Icon>
                    <Icon>
                        
                    </Icon>
                    <Icon>
                        
                    </Icon>
                    <Icon>
                        
                    </Icon>
                </Socials>
            </Group>
        </FooterContainer>
        <CopyRightText >© 2024 Chello. All rights reserved.</CopyRightText>
    </Fragment>
    );
}

export default Footer;