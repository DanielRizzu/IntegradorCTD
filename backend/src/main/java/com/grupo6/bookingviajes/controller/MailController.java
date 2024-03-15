package com.grupo6.bookingviajes.controller;
import com.grupo6.bookingviajes.model.MailRequest;
import com.grupo6.bookingviajes.services.impl.MailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mail")
@CrossOrigin("*")
public class MailController {

    @Autowired
    private MailServiceImpl mailService;

    @Autowired
    public MailController(MailServiceImpl mailService) {
        this.mailService = mailService;
    }

    @PostMapping("/send")
    public String sendMail(@RequestBody MailRequest mailRequest){
        mailService.sendMail(mailRequest.getMails().get(0), mailRequest.getMailStructure().getSubject(), mailRequest.getMailStructure().getMessage());
        return "Successfully sent the mail";
}
}