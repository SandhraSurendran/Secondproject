package com.niit.secprobackend.dao;

import com.niit.secprobackend.model.UploadFile;

public interface FileUploadDAO 
{
	void save(UploadFile uploadFile);
	UploadFile getFile(String username);
}
