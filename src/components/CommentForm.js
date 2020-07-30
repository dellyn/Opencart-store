import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, Label,Input, FormGroup } from 'reactstrap';

class Comment extends Component{


    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.handleComments = this.handleComments.bind(this);
      }

    handleComments(){
        console.log('111')
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        
    };
    handleLogin(){
        this.toggleModal();
    }
    render(){
        return(
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>qq
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup  className="">
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username"
                        innerRef={(input) => this.username = input}
                        />
                    </FormGroup>
                    <FormGroup  className="">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password"
                         innerRef={(input) => this.password = input}/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="remember"
                             innerRef={(input) => this.remember = input}/>
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button type="submit" onClick={this.handleComments} value="submit" className="bg-primary">Login</Button>

                </Form>

            </ModalBody>
        </Modal>

        );
    }
}
export default Comment;