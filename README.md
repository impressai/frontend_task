## Setup/Installations
* Install dependencies 
  * for server : ``npm install``
 * Run server (in main directory of project) ``npm start``

## APIS
**[GET]**   http://example.com/users

**[POST]**   http://example.com/user
```
{
    name:<string>,
    email:<string>
}
```
**[PUT]**   http://example.com/user/:id
```
{
    name:<string>,
    email:<string>
}
```

**[DELETE]**   http://example.com/user/:id

## LEVELS

### Level 1 
- Add CSS:
	- Convert the displayed data into an HTML table.
	-  Ensure there is appropriate spacing and padding between table elements for better readability [refer screenshot].
- Fix Existing Issues:
	- The "Add User" button is currently not functioning. Identify the issue and fix it so that new users can be added.
	- Ensure that both the name and email fields are not left empty and contain valid values before submission.
	- Implement validation for the email field to ensure that only valid email addresses are accepted.

![image](https://github.com/arunnair018/hiring_task/assets/28563570/94e8a6bb-d937-4ed6-9c95-c3a8511231d8)



### Level 2
- Integrate Antd components
	- Table: Use Ant Design's table component to display the data.
	- Buttons: Replace existing buttons with Ant Design's button components.
	- Inputs: Use Ant Design's input components for forms.
- Fix Existing Issues: 
	- Form Reset on Submission: Ensure that after submitting the form, the values in the name and email input fields are cleared.

![image](https://github.com/arunnair018/hiring_task/assets/28563570/82585500-50b7-441a-be07-c4f4ce68099b)


### Level 3
- Add delete functionality:
	- Delete for Each User: Implement a delete feature for each user entry

![image](https://github.com/arunnair018/hiring_task/assets/28563570/d32fd22b-e99f-4dc3-9069-3d1bfc1140be)



### Level 4
- Add edit functionality:
	- Edit for Each User: Implement a edit feature for each user entry

![image](https://github.com/arunnair018/hiring_task/assets/28563570/d2a63b3a-ff24-437a-94d5-847fcef29457)


### Bonus level
- Maintain separate reducer - create and manage a separate reducer for storing the details of the currently edited user.
- Add Confirmation for Deletion - implement a confirmation dialog that asks for user approval before deleting a user entry.
