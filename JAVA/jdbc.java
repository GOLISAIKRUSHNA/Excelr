

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;



/**
 * jdbc
 */
public class jdbc {

    public static void main(String[] args) throws ClassNotFoundException, SQLException {

		Class.forName("com.mysql.cj.jdbc.Driver");

		Connection connection= DriverManager.getConnection("jdbc:mysql://localhost:3306/gauri","root","root");

	Statement statement = connection.createStatement();

	statement.execute("INSERT INTO login VALUES('ABC', 'ABC@GMAIL.COM')");

	connection.close();

		

	}
}