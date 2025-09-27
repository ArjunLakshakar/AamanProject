import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import UserSchema from "../Model/UserSchema.js";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        let user = await UserSchema.findOne({ googleId: profile.id });

        if (!user) {
          // signup case
          user = await UserSchema.create({
            googleId: profile.id,
            email: profile.emails?.[0].value,
            name: profile.displayName,
          });
        }
        // signin case → user already exists
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserSchema.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
