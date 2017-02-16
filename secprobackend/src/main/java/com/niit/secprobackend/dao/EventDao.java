package com.niit.secprobackend.dao;

import java.util.List;

import com.niit.secprobackend.model.Event;

public interface EventDao {

	void create(Event event);
	
	void update(Event event);
	
	//void remove(Event event);
	
	Event getEventById(long eventId);
	
	List<Event> listEvents();
	
}
