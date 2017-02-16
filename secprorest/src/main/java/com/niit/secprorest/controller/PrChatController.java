package com.niit.secprorest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.niit.secprobackend.model.PrivateMessage;

@Controller
public class PrChatController {

	@Autowired
	private SimpMessagingTemplate smt;
	
	@MessageMapping("/prChat")
	public void sendMessage(PrivateMessage prMsg) {
		prMsg.setTime(new java.util.Date());
		smt.convertAndSend("/queue/message/" + prMsg.getUsername(), prMsg);
		smt.convertAndSend("/queue/message/" + prMsg.getFriendName(), prMsg);
	}
}