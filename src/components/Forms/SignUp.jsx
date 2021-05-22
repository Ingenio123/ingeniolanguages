


export const SignUp = ()=>{
    
    return(
        <>
        
            <div className="container ">
                <h1 className="title">Bienvenido</h1>
                <form>
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="row mt-4">
                                <div class="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>User name</label>
                                        <input type="text" class="form-control" placeholder="First name"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input type="text" class="form-control" placeholder="Age"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" class="form-control" placeholder="Email@example.com"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-12">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" class="form-control" />
                                    </div>
                                </div>
                                <div class="col col-md-12">
                                    <div className="form-group">
                                        <label for="exampleFormControlSelect1">Your Language</label>
                                        <select class="form-control" id="exampleFormControlSelect1" >
                                            <option>Spanish</option>
                                            <option>English</option>
                                            <option>French </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <h2>Image </h2>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}