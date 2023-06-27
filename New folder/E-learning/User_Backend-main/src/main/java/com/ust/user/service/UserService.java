package com.ust.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.user.entity.User;
import com.ust.user.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
	
	@Autowired
	UserRepository repository;



	public User registerUser(User user)
	{
		User userSaved = repository.save(user);
		return userSaved;
	}
	
	public User getUserByUsername(String username)  {
		
		return repository.findByUsername(username);
	}

	public List<User> getallusr() {
		return repository.findAll();
	}
}
