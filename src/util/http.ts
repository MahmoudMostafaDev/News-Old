import axios from "axios";

export type loginObj = {
  username: string;
  password: string;
};
export type RegisterObj = {
  username: string;
  password: string;
  preferences: string[];
};

export async function login({ username, password }: loginObj) {
  try {
    if (!username || !password) {
      return "fill all fields";
    }
    const res = await axios.post(
      "https://news-old-backend-production.up.railway.app/login",
      {
        username,
        password,
      }
    );

    return res.data;
  } catch (err: any) {
    if (err.status === 401) {
      return "Username / Password are incorrect";
    }
    return "network";
  }
}
export async function register(data: RegisterObj) {
  try {
    const res = await axios.post(
      "https://news-old-backend-production.up.railway.app/register",
      data
    );
    return { code: 200, data: res.data };
  } catch (err: any) {
    if (err.status == 409) {
      return { msg: "username already exist", code: 101 };
    } else if (err.status === 400) {
      return { msg: "all fields are requierd", code: 101 };
    } else {
      return { msg: "can't connect to server", code: 101 };
    }
  }
}

export async function getHeadNews({
  signal,
  categories,
}: {
  signal: any;
  categories: string[];
}) {
  let categoriesText = categories.join(",");
  try {
    const res = await axios.get(
      `https://news-old-backend-production.up.railway.app/api/v1/headnews?categories=${categoriesText.toLowerCase()}`
    );
    return { code: 200, data: [...res.data] };
  } catch (err: any) {
    if (err.status && err.status === 404) {
      return { code: 404, msg: "Can't find News" };
    }
    return { code: 404, msg: "error in connecting to the server" };
  }
}

export async function getUserPreferencers(token: string) {
  try {
    const res = await axios.get(
      "https://news-old-backend-production.up.railway.app/api/v1/preferences",
      {
        headers: {
          Authorization: `Barrer ${token}`,
        },
      }
    );
    return { preferences: res.data };
  } catch (err: any) {
    return { code: 101 };
  }
}

export async function setUserPreferencers(
  token: string,
  preferences: string[]
) {
  try {
    const res = await axios.post(
      "https://news-old-backend-production.up.railway.app/api/v1/preferences",
      {
        preferences,
      },
      {
        headers: {
          Authorization: `Barrer ${token}`,
        },
      }
    );
    return { code: 200, message: res.data.message };
  } catch (err: any) {
    return { code: 101 };
  }
}

export async function getNews({
  pageParam = 1,
  categories,
}: {
  pageParam: number;
  categories: string[];
}) {
  try {
    //TODO:Add categories
    const res = await axios.get(
      `https://news-old-backend-production.up.railway.app/api/v1/news?page=${pageParam}&categories=${categories
        .join(",")
        .toLowerCase()}`
    );
    return { code: 200, data: res.data };
  } catch (error: any) {
    return { code: 404, msg: "error in fetching news" };
  }
}

export async function saveNews(token: string, New: any) {
  try {
    const res = await axios.post(
      "https://news-old-backend-production.up.railway.app/api/v1/save",
      New,
      {
        headers: {
          Authorization: `Barrer ${token}`,
        },
      }
    );

    return { code: res.status, msg: res.data.msg };
  } catch (err) {
    return { code: 101, msg: "unable to connect to the server" };
  }
}

export async function getSavedNews(token: string) {
  try {
    const res = await axios.get(
      "https://news-old-backend-production.up.railway.app/api/v1/save",
      {
        headers: {
          Authorization: `Barrer ${token}`,
        },
      }
    );

    return { code: res.data.code, data: res.data.data };
  } catch (err) {
    return { code: 101, msg: "unable to connect to the server" };
  }
}
