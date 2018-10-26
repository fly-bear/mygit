package com.flybear.blog;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.net.URL;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BlogApplicationTests {

    private int port;

    private URL base;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Before
    public void set() throws Exception{
        String url = String.format("http://localhost:%d/blog",port);
        System.out.println(String.format("port:[%d]",port));
        this.base = new URL(url);
    }

    @Test
    public void contextLoads() throws Exception{
        ResponseEntity<String> response = this.testRestTemplate.getForEntity(this.base.toString(),String.class,"");

    }

}
