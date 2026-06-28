//Name: Kyle McAfee
//Date: 12/7/2025
//Description: Program uses abstract and concrete classes to display media details
//Time Spent: 2 hours

package com.csc220.inventory;

//Makes arrays resizable 
import java.util.ArrayList;

public class MediaClient {
    public static void main(String[] args) {
    	//Initializing the array that will store all media examples 
        ArrayList<Media> collection = new ArrayList<>();

        // Create DVD objects with relevant arguments 
        collection.add(new DVD("Chris Pine", "Jack Ryan", 100, 1,
                               "Kenneth Branagh", "abcFormat", true, true));
        collection.add(new DVD("Tom Hanks", "Captain Phillips", 135, 1,
                               "Paul Greengrass", "defFormat", false, false));

        // Create VHS objects
        collection.add(new VHS("Aaron Eckhart", "I Frankenstein", 120, 1,
                               "Stuart Beattie", "xyzFormat", "FrankTrailer"));
        collection.add(new VHS("Christian Bale", "American Hustle", 115, 1,
                               "David O. Russell", "223Format", "HustleTrailer"));

        // Enhanced for loop goes through every element and prints them out
        for (Media m : collection) {
            System.out.println(m.toString());
            m.playMedia();
        }
    }
}
