package api;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import java.util.Comparator;
import java.util.List;
import util.*;

@Path("methods")
public class MethodsAPI {
    static LogicFactory logicFactory = new LogicFactory();
    static UserExporter exporter = new UserExporter();
    static ObjectMapper mapper = new ObjectMapper();

    @GET
    @Path("userswithreversednames")
    public static Response usersWithReversedNames() {

        List<User> users = exporter.getUsersList();
        ArrayNode arr = mapper.createArrayNode();

        users.forEach(u -> {
            ObjectNode tempObj = mapper.createObjectNode();
            tempObj.put("id", u.getId());
            tempObj.put("firstName", u.getFirstname());
            tempObj.put("lastName", u.getLastname());
            tempObj.put("userName", u.getUsername());
            tempObj.put("age", u.getAge());
            tempObj.put("reversedName", logicFactory.reverseStringUtil(u.getFirstname()));
            tempObj.put("isPalindrom", logicFactory.isPalindromUtil(u.getFirstname().toLowerCase()));
            arr.add(tempObj);
        });
        return Response.ok(
                arr.toString()).build();
    }

    @POST
    @Path("reversestring")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public static Response reverseString(@FormParam("string") String string) {
        return Response.ok(
                logicFactory.reverseStringUtil(string)).build();
    }

    @POST
    @Path("ispalindrome")
    public static Response isPalindrome(@FormParam("string") String string) {
        return Response.ok(
                logicFactory.isPalindromUtil(string)).build();
    }

    @POST
    @Path("padnumberwithzeroes")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public static Response padNumberWithZeroes(@FormParam("number") int number) {

        String padded = String.format("%05d", number);

        return Response.ok(
                padded).build();
    }

    @POST
    @Path("findnthlargestnumber")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public static Response findNthLargestNumber(@FormParam("numbers") List<Integer> numbers,
            @FormParam("nthlargestnumber") int nthLargestNumber) {
        numbers.sort(Comparator.naturalOrder());
        numbers.sort(Comparator.reverseOrder());

        if (nthLargestNumber > 0 && nthLargestNumber <= numbers.size()) {
            return Response.ok(
                    numbers.get(nthLargestNumber - 1).toString()).build();
        }
        return Response.status(400).build();
    }
}
