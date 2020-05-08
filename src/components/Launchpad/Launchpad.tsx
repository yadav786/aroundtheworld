import React, { Component } from 'react'
import { UserLists, UserForm, UserRoles, RoleForm } from './';
// import Hello from 'module-npm-package';
import styles from './Launchpad.module.css'; 

export const Launchpad = (props:any) => { 

        return (
            <div>
                 { props.components === '/settings/user-management/roles' ?
                 <UserRoles allUsers={[{_id:1}]} editUser={(user_id) => { alert('hello'); } }/>
                 : props.components === '/settings/user-management/create-new-user' ?   
                 <UserForm  {...props} /> : props.components === '/settings/user-management/users'
                 ? <UserLists allUsers={[{_id:1}]} editUser={(user_id) => { alert('hello'); } }/> 
                 : props.components === '/settings/user-management/create-role' ? <RoleForm/> 
                 : props.match.path === '/settings/user-management/update-user/:id' ? <UserForm {...props}/> 
                 : props.match.path === '/settings/user-management/update-role/:id' ? <RoleForm/> 
                 : <h2>hello</h2>
                 }
            </div>
        )
    }

