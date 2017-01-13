package com.niit.secprobackend.dao;

import java.util.List;

import com.niit.secprobackend.model.User;

public interface UserDAO {

	public void addUser(User user);
	public void updateUser(User user);
	public void deleteUser(User user);
	public User getUserByUsername(String username);
	public List<User> listUsers();
	
	
	
}
