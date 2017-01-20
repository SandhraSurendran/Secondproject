package com.niit.secprobackend.dao;

import java.util.List;

import com.niit.secprobackend.model.Job;

public interface JobDao 
{
void postJob(Job job);
List<Job> getAllJobs();
Job getJobDetail(int jobId);
}
