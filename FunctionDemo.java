import java.util.*;
public class FunctionDemo
{
	public static void main(String[] args)
	{
		Scanner jianpan = new Scanner(System.in);
		System.out.print("������Ҫת�����ַ�:");
		String x = jianpan.next();
		char abc = x.charAt(0);
		
		int y = f(abc);
		System.out.print(y);
	}

	public static int f(char x)
	{
		return	x; 	
	
	}

}
