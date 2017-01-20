package com.niit.secprobackend.dao;

import java.util.List;

import com.niit.secprobackend.model.Friend;

public interface FriendDao 
{
	List<Friend> getAllFriends(String username);
	void sendFriendRequest(String from,String to);
	List<Friend> getPendingRequest(String username);
	void updatePendingRequest(char friendStatus,String fromId,String toId);
}