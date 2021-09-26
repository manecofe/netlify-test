import React, { Component } from 'react';
import styled from 'styled-components';
import {ReactLogo} from '@styled-icons/fa-brands/ReactLogo';
import {Home} from '@styled-icons/fa-solid/Home';
import {AddressCard} from '@styled-icons/fa-solid/AddressCard';
import {User} from '@styled-icons/fa-solid/User';
const ReactIcon = styled(ReactLogo)`
  color: White;
`;
const HomeIcon = styled(Home)`
  color: White;
`;
const CVIcon = styled(AddressCard)`
  color: White;
`;
const UserIcon = styled(User)`
  color: White;
`;
const Tittle=styled.h2`
    color: white;
    margin:10px;
`
const Tittle2=styled.h3`
    color: gray;
    margin:10px;
`
export default class header extends Component {
    render() {
        return (
            <div>
                <div className="px-3 py-2 bg-dark text-white">
                    <div className="container-fluid">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <svg className="bi m-2" width="40" height="40" role="img">
                                <ReactIcon />
                            </svg>
                            
                            <div class="user-select-none d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <Tittle>
                                    Manuel Valderrama
                                </Tittle>
                                <Tittle2>
                                    React Developer
                                </Tittle2>
                            </div>
                            
                            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <a class="nav-link text-white">
                                        <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                                            <HomeIcon/>
                                        </svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a class="nav-link text-white">
                                        <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                                        <CVIcon/>
                                        </svg>
                                        My CV
                                    </a>
                                </li>
                                <li>
                                    <a class="nav-link text-white">
                                        <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                                            <UserIcon/>
                                        </svg>
                                        sobre mi
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
